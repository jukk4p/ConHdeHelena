-- Tabla de Productos
CREATE TABLE public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Tabla de Mensajes de Contacto
CREATE TABLE public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Tabla de Pedidos
CREATE TABLE public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  product_id UUID REFERENCES public.products(id),
  customization_details TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'manufacturing', 'shipped', 'delivered')),
  payment_link TEXT,
  deadline DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS para Admin (solo usuarios autenticados pueden leer y escribir)
CREATE POLICY "Permitir todo a usuarios autenticados" ON public.products
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Permitir todo a usuarios autenticados" ON public.contact_messages
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Permitir todo a usuarios autenticados" ON public.orders
  FOR ALL USING (auth.role() = 'authenticated');

-- Políticas para lectura pública o creación desde la web
-- 1. Los usuarios anónimos pueden ver los productos activos
CREATE POLICY "Permitir lectura pública de productos" ON public.products
  FOR SELECT USING (is_active = true);

-- 2. Los usuarios anónimos pueden insertar mensajes de contacto
CREATE POLICY "Permitir insertar mensajes a anónimos" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- 3. Los usuarios anónimos pueden insertar pedidos (cuando piden por la web)
CREATE POLICY "Permitir insertar pedidos a anónimos" ON public.orders
  FOR INSERT WITH CHECK (true);

-- ==========================================
-- CONFIGURACIÓN DE STORAGE (ALMACENAMIENTO)
-- ==========================================

-- 1. Crear bucket de imágenes de productos (público)
INSERT INTO storage.buckets (id, name, public)
VALUES ('products', 'products', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Habilitar seguridad de filas (RLS) en storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 3. Crear política de lectura pública para las imágenes
CREATE POLICY "Permitir lectura pública de imágenes" ON storage.objects
  FOR SELECT USING (bucket_id = 'products');

-- 4. Crear políticas de administración para usuarios autenticados (Admin)
CREATE POLICY "Permitir subida de imágenes a autenticados" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'products' AND auth.role() = 'authenticated');

CREATE POLICY "Permitir actualizar imágenes a autenticados" ON storage.objects
  FOR UPDATE USING (bucket_id = 'products' AND auth.role() = 'authenticated');

CREATE POLICY "Permitir borrar imágenes a autenticados" ON storage.objects
  FOR DELETE USING (bucket_id = 'products' AND auth.role() = 'authenticated');

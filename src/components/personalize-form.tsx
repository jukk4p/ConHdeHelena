"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
  productType: z.string({
    required_error: "Por favor, selecciona un tipo de producto.",
  }),
  color: z.string().optional(),
  file: z.any().optional(),
  customText: z.string().min(2, {
    message: "El texto debe tener al menos 2 caracteres.",
  }),
  specialInstructions: z.string().optional(),
})

export function PersonalizeForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: "",
      customText: "",
      specialInstructions: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Here you would typically handle file upload and send the data to a server
    console.log(values)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    form.reset()
    toast({
      title: "¡Solicitud Enviada!",
      description: "Hemos recibido tu idea. Nos pondremos en contacto contigo pronto.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="productType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Objeto</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el objeto a personalizar" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="taza">Taza</SelectItem>
                  <SelectItem value="camiseta">Camiseta</SelectItem>
                  <SelectItem value="vinilo">Vinilo decorativo</SelectItem>
                  <SelectItem value="invitacion">Invitación</SelectItem>
                  <SelectItem value="otro">Otro (descríbelo abajo)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Colores</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Blanco, negro y dorado" {...field} />
              </FormControl>
               <FormDescription>
                Indica los colores que te gustaría usar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="customText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Texto a Personalizar</FormLabel>
              <FormControl>
                <Input placeholder="Ej: El nombre, una frase, una fecha..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sube tu imagen (opcional)</FormLabel>
              <FormControl>
                <Input type="file" onChange={e => field.onChange(e.target.files)} />
              </FormControl>
              <FormDescription>
                Si tienes un logo o diseño, puedes subirlo aquí.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="specialInstructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instrucciones Especiales</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe tu idea con todo detalle. ¿Dónde quieres el texto? ¿Algún estilo en particular?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isSubmitting ? "Enviando Solicitud..." : "Enviar Mi Idea"}
        </Button>
      </form>
    </Form>
  )
}

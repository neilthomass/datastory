"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [clientType, setClientType] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setMessage(null)

    // Add the client type to form data since Select component doesn't automatically include it
    formData.set("clientType", clientType)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setMessage({ type: "success", text: result.message || "Message sent successfully!" })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
        setClientType("")
      } else {
        setMessage({ type: "error", text: result.error || "Failed to send message" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An unexpected error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <form id="contact-form" action={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First name*
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full"
              placeholder="Enter your first name"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last name*
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full"
              placeholder="Enter your last name"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email*
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="w-full"
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            className="w-full"
            placeholder="Enter your phone number"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="clientType" className="block text-sm font-medium text-gray-700 mb-2">
            Are you an interested client or prospective member?
          </label>
          <Select value={clientType} onValueChange={setClientType} disabled={isSubmitting}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="interested-client">Interested Client</SelectItem>
              <SelectItem value="prospective-member">Prospective Member</SelectItem>
              <SelectItem value="neither">Neither</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Leave us a message!
          </label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            className="w-full"
            placeholder="Tell us about your project or how you'd like to get involved..."
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#023020] hover:bg-[#023020]/90 text-white py-3 text-lg font-medium disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  )
}

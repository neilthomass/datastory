import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/actions/contact"

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
    <div>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg border flex items-start gap-3 ${
            message.type === "success"
              ? "bg-datastory-green/10 text-datastory-green border-datastory-green/30"
              : "bg-red-500/10 text-red-400 border-red-500/30"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          )}
          <p className="text-sm font-medium">{message.text}</p>
        </motion.div>
      )}

      <form id="contact-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.currentTarget)); }} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-heading font-semibold text-foreground mb-2">
              First name<span className="text-datastory-green">*</span>
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full bg-datastory-surface border-datastory-green/30 text-foreground placeholder:text-muted-foreground focus:border-datastory-green focus:ring-datastory-green/20 transition-all"
              placeholder="Enter your first name"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-heading font-semibold text-foreground mb-2">
              Last name<span className="text-datastory-green">*</span>
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full bg-datastory-surface border-datastory-green/30 text-foreground placeholder:text-muted-foreground focus:border-datastory-green focus:ring-datastory-green/20 transition-all"
              placeholder="Enter your last name"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-heading font-semibold text-foreground mb-2">
            Email<span className="text-datastory-green">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-datastory-surface border-datastory-green/30 text-foreground placeholder:text-muted-foreground focus:border-datastory-green focus:ring-datastory-green/20 transition-all"
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-heading font-semibold text-foreground mb-2">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-datastory-surface border-datastory-green/30 text-foreground placeholder:text-muted-foreground focus:border-datastory-green focus:ring-datastory-green/20 transition-all"
            placeholder="Enter your phone number"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="clientType" className="block text-sm font-heading font-semibold text-foreground mb-2">
            Are you an interested client or prospective member?
          </label>
          <Select value={clientType} onValueChange={setClientType} disabled={isSubmitting}>
            <SelectTrigger className="w-full bg-datastory-surface border-datastory-green/30 text-foreground focus:border-datastory-green focus:ring-datastory-green/20 transition-all">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-datastory-surface border-datastory-green/30">
              <SelectItem value="interested-client" className="text-foreground focus:bg-datastory-green/20 focus:text-datastory-green">
                Interested Client
              </SelectItem>
              <SelectItem value="prospective-member" className="text-foreground focus:bg-datastory-green/20 focus:text-datastory-green">
                Prospective Member
              </SelectItem>
              <SelectItem value="neither" className="text-foreground focus:bg-datastory-green/20 focus:text-datastory-green">
                Neither
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-heading font-semibold text-foreground mb-2">
            Leave us a message!
          </label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            className="w-full bg-datastory-surface border-datastory-green/30 text-foreground placeholder:text-muted-foreground focus:border-datastory-green focus:ring-datastory-green/20 transition-all resize-none"
            placeholder="Tell us about your project or how you'd like to get involved..."
            disabled={isSubmitting}
          />
        </div>

        <motion.div
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-green hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] text-white py-6 text-lg font-heading font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </span>
            {!isSubmitting && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-datastory-greenBright to-datastory-greenGlow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            )}
          </Button>
        </motion.div>
      </form>
    </div>
  )
}

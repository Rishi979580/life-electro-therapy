import Image from "next/image"
import websiteData from "@/data/website_data.json"

type Doctor = {
  name?: string
  degree?: string
  image?: string
}

export default function DoctorSection() {
  const doctors = (websiteData?.doctors as Doctor[]) ?? []
  const clinic = websiteData?.clinic_name || "Our Clinic"

  if (!doctors.length) return null

  return (
    <section id="doctors" className="py-16 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-2">
          {clinic}
        </h2>
        <p className="text-muted-foreground mb-8">Our Experienced Practitioners</p>

        {/* ✅ Responsive grid: 1 → 2 → 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => {
            const img = doc.image?.trim() || "/placeholder-avatar.png"
            return (
              <div
                key={i}
                className="bg-white dark:bg-card p-6 rounded-2xl shadow-lg ring-1 ring-border flex flex-col items-center text-center"
              >
                <div className="w-40 h-40 relative mb-4">
                  <Image
                    src={img}
                    alt={doc.name ? `${doc.name} photo` : "Doctor photo"}
                    fill
                    className="rounded-full object-cover shadow-md"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-lg font-semibold">{doc.name || "Doctor"}</h3>
                {doc.degree && (
                  <p className="text-sm text-muted-foreground">{doc.degree}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

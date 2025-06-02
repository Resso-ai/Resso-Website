import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

interface ExperienceEntry {
  title: string
  description: string
}

interface EducationEntry {
  school: string
  graduation: string
  program: string
}

export default function ExperienceEducationPage() {
  const [experiences, setExperiences] = useState<ExperienceEntry[]>([])
  const [education, setEducation] = useState<EducationEntry[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [achievements, setAchievements] = useState<string[]>([])
  const [interests, setInterests] = useState<string[]>([])

  const [expTitle, setExpTitle] = useState("")
  const [expDesc, setExpDesc] = useState("")

  const [eduSchool, setEduSchool] = useState("")
  const [eduGrad, setEduGrad] = useState("")
  const [eduProgram, setEduProgram] = useState("")

  const [skill, setSkill] = useState("")
  const [achievement, setAchievement] = useState("")
  const [interest, setInterest] = useState("")

  const [error, setError] = useState("")
  const [errorSection, setErrorSection] = useState("")

  const addExperience = () => {
    if (!expTitle || !expDesc) {
      setError("Please fill out both the title and description for experience.")
      setErrorSection("experience")
      return
    }
    setError("")
    setExperiences([...experiences, { title: expTitle, description: expDesc }])
    setExpTitle("")
    setExpDesc("")
  }

  const removeExperience = (idx: number) => {
    setExperiences(experiences.filter((_, i) => i !== idx))
  }

  const addEducation = () => {
    if (!eduSchool || !eduGrad || !eduProgram) {
      setError("Please complete all education fields.")
      setErrorSection("education")
      return
    }
    setError("")
    setEducation([...education, { school: eduSchool, graduation: eduGrad, program: eduProgram }])
    setEduSchool("")
    setEduGrad("")
    setEduProgram("")
  }

  const removeEducation = (idx: number) => {
    setEducation(education.filter((_, i) => i !== idx))
  }

  const addSkill = () => {
    if (!skill) {
      setError("Skill field cannot be empty.")
      setErrorSection("skills")
      return
    }
    setError("")
    setSkills([...skills, skill])
    setSkill("")
  }

  const removeSkill = (idx: number) => {
    setSkills(skills.filter((_, i) => i !== idx))
  }

  const addAchievement = () => {
    if (!achievement) {
      setError("Achievement field cannot be empty.")
      setErrorSection("achievements")
      return
    }
    setError("")
    setAchievements([...achievements, achievement])
    setAchievement("")
  }

  const removeAchievement = (idx: number) => {
    setAchievements(achievements.filter((_, i) => i !== idx))
  }

  const addInterest = () => {
    if (!interest) {
      setError("Interest field cannot be empty.")
      setErrorSection("interests")
      return
    }
    setError("")
    setInterests([...interests, interest])
    setInterest("")
  }

  const removeInterest = (idx: number) => {
    setInterests(interests.filter((_, i) => i !== idx))
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 space-y-10">
      <div>
        <h1 className="text-3xl font-semibold mb-6">Experience</h1>
        {error && errorSection === "experience" && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <Card className="mb-6">
          <CardContent className="space-y-4 p-6">
            <Input placeholder="Role (e.g., Math Tutor)" value={expTitle} onChange={(e) => setExpTitle(e.target.value)} />
            <Textarea placeholder="Description of what you did" value={expDesc} onChange={(e) => setExpDesc(e.target.value)} />
            <Button onClick={addExperience}>Add Experience</Button>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="relative">
              <CardContent className="p-4">
                <button className="absolute top-2 right-2 text-muted-foreground" onClick={() => removeExperience(idx)}>
                  <X size={16} />
                </button>
                <h2 className="font-medium text-lg">{exp.title}</h2>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold mb-6">Education</h1>
        {error && errorSection === "education" && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <Card className="mb-6">
          <CardContent className="space-y-4 p-6">
            <Input placeholder="School Name" value={eduSchool} onChange={(e) => setEduSchool(e.target.value)} />
            <Input placeholder="Graduation Date (e.g., June 2026)" value={eduGrad} onChange={(e) => setEduGrad(e.target.value)} />
            <Input placeholder="Program or Diploma (e.g., OSSD)" value={eduProgram} onChange={(e) => setEduProgram(e.target.value)} />
            <Button onClick={addEducation}>Add Education</Button>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <Card key={idx} className="relative">
              <CardContent className="p-4">
                <button className="absolute top-2 right-2 text-muted-foreground" onClick={() => removeEducation(idx)}>
                  <X size={16} />
                </button>
                <h2 className="font-medium text-lg">{edu.school}</h2>
                <p className="text-sm">{edu.program}</p>
                <p className="text-sm text-muted-foreground">Graduation: {edu.graduation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold mb-6">Skills</h1>
        {error && errorSection === "skills" && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <Card className="mb-6">
          <CardContent className="space-y-4 p-6">
            <Input placeholder="Add a skill (e.g., Python, Excel)" value={skill} onChange={(e) => setSkill(e.target.value)} />
            <Button onClick={addSkill}>Add Skill</Button>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, idx) => (
            <span key={idx} className="bg-muted text-sm px-3 py-1 rounded-full flex items-center gap-2">
              {s}
              <button onClick={() => removeSkill(idx)}><X size={12} /></button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold mb-6">Achievements</h1>
        {error && errorSection === "achievements" && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <Card className="mb-6">
          <CardContent className="space-y-4 p-6">
            <Input placeholder="Achievement (e.g., 2x Math Contest Winner)" value={achievement} onChange={(e) => setAchievement(e.target.value)} />
            <Button onClick={addAchievement}>Add Achievement</Button>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          {achievements.map((a, idx) => (
            <span key={idx} className="bg-muted text-sm px-3 py-1 rounded-full flex items-center gap-2">
              {a}
              <button onClick={() => removeAchievement(idx)}><X size={12} /></button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold mb-6">Interests</h1>
        {error && errorSection === "interests" && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <Card className="mb-6">
          <CardContent className="space-y-4 p-6">
            <Input placeholder="Interest (e.g., STEM, Basketball)" value={interest} onChange={(e) => setInterest(e.target.value)} />
            <Button onClick={addInterest}>Add Interest</Button>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          {interests.map((i, idx) => (
            <span key={idx} className="bg-muted text-sm px-3 py-1 rounded-full flex items-center gap-2">
              {i}
              <button onClick={() => removeInterest(idx)}><X size={12} /></button>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

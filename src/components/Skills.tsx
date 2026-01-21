import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data2 from "@/data/back-end-skills.json";
import data1 from "@/data/front-end-skills.json";
import { skillSchema } from "@/lib/schemas";
import { SkillCard } from "./SkillCard";

export default function Skills() {
  const front_end_skills = skillSchema.parse(data1).skills;
  const back_end_skills = skillSchema.parse(data2).skills;
  return (
    <Tabs defaultValue="frontend">
      <TabsList className="mb-2 grid w-full grid-cols-2">
        <TabsTrigger value="frontend">Languages</TabsTrigger>
        <TabsTrigger value="backend">Frameworks</TabsTrigger>
      </TabsList>
      <TabsContent value="frontend">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {front_end_skills.map((skill, id) => (
            <SkillCard key={id} skill={skill} />
          ))}
        </section>
      </TabsContent>
      <TabsContent value="backend">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {back_end_skills.map((skill, id) => (
            <SkillCard key={id} skill={skill} />
          ))}
        </section>
      </TabsContent>
    </Tabs>
  );
}

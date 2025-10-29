import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Award } from 'lucide-react';

export function GradingReference() {
  const criteria = [
    { name: "Content Relevance", description: "Shows clear understanding of the community's role in CJS", points: 30 },
    { name: "Creativity & Presentation", description: "Original, engaging, and well-organized presentation", points: 25 },
    { name: "Accuracy of Information", description: "Correct and factual representation", points: 25 },
    { name: "Teamwork / Participation", description: "Equal contribution among group members", points: 10 },
    { name: "Reflection / Impact", description: "Shows awareness of real-life community involvement", points: 10 }
  ];

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
        <div className="flex items-center gap-3 text-white">
          <Award className="w-8 h-8" />
          <h2 className="text-2xl">Grading Criteria Reference</h2>
        </div>
      </div>
      
      <div className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Criteria</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {criteria.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right">{item.points} pts</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-yellow-50">
              <TableCell colSpan={2} className="text-right">
                <strong>TOTAL</strong>
              </TableCell>
              <TableCell className="text-right">
                <strong>100 pts</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

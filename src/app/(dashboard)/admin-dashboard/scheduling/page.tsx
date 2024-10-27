"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

// Define TypeScript interfaces
interface Shift {
    shiftId: string;
    employees: string[];
}

interface Schedule {
    date: string;
    shifts: Shift[];
}

// Sample data structure
const scheduleData: Schedule[] = [
    {
        date: "2024-12-1",
        shifts: [
            { shiftId: "1", employees: ["jane1", "jane2"] },
            { shiftId: "2", employees: ["jane1", "jane2", "jane3"] },
        ],
    },
    {
        date: "2024-12-8",
        shifts: [
            { shiftId: "1", employees: ["jane1", "jane2"] },
            { shiftId: "2", employees: ["jane1", "jane2", "jane3"] },
        ],
    },
    // Add more data as needed
];

const ScheduleCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {scheduleData.map((day, index) => (
                <div key={index}>
                    <Card className="bg-primary text-white p-4 shadow-lg rounded-lg">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold">
                                Date: {new Date(day.date).toLocaleDateString()}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {day.shifts.map((shift) => (
                                <div key={shift.shiftId} className="border-t pt-2">
                                    <p className="text-sm font-semibold">Shift {shift.shiftId}</p>
                                    <ul className="list-disc pl-5 text-sm">
                                        {shift.employees.map((employee, idx) => (
                                            <li key={idx}>{employee}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ScheduleCards;

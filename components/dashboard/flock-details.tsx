import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface FlockDetail {
  label: string
  value: string
}

interface FlockDetailsProps {
  details: FlockDetail[]
}

export function FlockDetails({ details }: FlockDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Flock Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {details.map((detail, index) => (
              <div key={index}>
                <p className="text-sm font-medium text-muted-foreground">
                  {detail.label}
                </p>
                <p className="text-sm font-bold">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
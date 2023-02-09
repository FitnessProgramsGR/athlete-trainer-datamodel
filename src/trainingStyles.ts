export interface ExtraInfoFields {
  field: string;
  displayField: string;
  description: string;
  default?: string
}

export interface TrainingStyle {
  name: string;
  id: string;
  type: "serial" | "rounds" | "tabata" | "combo";
  fields?: ExtraInfoFields[];
  availableMetrics?: string[];
  exerciseLimit?: number,
  fixedRounds?:number,
  fixedReps?: number,
  fixedMetric?: string,
  fixedWeight?: number,
  fixedWeightDelta?: number,
  fixedRepsDelta?: number
  description?: string
}
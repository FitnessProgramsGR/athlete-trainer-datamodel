export interface ExtraInfoField {
  field: string;
  displayField: string;
  description: string;
  default?: string;
  options?: string[];
  value?: string;
  widget: "input" | "delta" | "select" | "numericInput";
  fixedMetric?: string;
}

export interface TrainingStyle {
  name: string;
  id: string;
  type: "serial" | "rounds" | "tabata" | "combo";
  fields?: ExtraInfoField[];
  exerciseLimit?: number;
  fixedRounds?: number;
  fixedReps?: number;
  fixedMetric?: string;
  fixedWeight?: number;
  fixedWeightDelta?: number;
  fixedRepsDelta?: number;
  description?: string;
}

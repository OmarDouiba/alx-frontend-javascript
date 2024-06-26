export interface MajorCredits {
  credits: number;
  brand: "major";
}

export interface MinorCredits {
  credits: number;
  brand: "mainor";
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MinorCredits
): number {
  return subject1.credits + subject2.credits;
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MajorCredits
): number {
  return subject1.credits + subject2.credits;
}

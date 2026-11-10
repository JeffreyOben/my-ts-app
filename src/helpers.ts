export function fullName(first: string, last: string): string {
  return `${first} ${last}`;
}

export function yearsUntilRetirement(
  age: number,
  retiredAt: number
): number {
  return retiredAt - age;
}

export function canVote(age: number): boolean {
  return age >= 18;
}

export function greet(name = 'world', greeting?: string): string {
  const text = greeting ?? 'Hello';
  return `${text}, ${name}!`;
}
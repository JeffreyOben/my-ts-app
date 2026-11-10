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

// A union allows either a string or a number.
export type Id = string | number;

export function printId(id: Id): void {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// An intersection combines both shapes.
type HasName = { name: string };
type HasEmail = { email: string };

export type Contact = HasName & HasEmail;

export function formatContact(contact: Contact): string {
  return `${contact.name} <${contact.email}>`;
}
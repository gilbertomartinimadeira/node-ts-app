export default abstract class DomainEvent {
    
    date: Date;
    type: string;
    
    toString(): string {
        return `${this.type} at ${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}`;
    }
}
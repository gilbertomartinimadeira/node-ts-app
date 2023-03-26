export default interface DomainEvent {
    
    date: Date;
    type: string;
    
    toString(): string;
}
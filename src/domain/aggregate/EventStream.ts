import DomainEvent from "./events/DomainEvent";

export interface EventStream {
    events : DomainEvent[];
    newEvents : DomainEvent[];
}
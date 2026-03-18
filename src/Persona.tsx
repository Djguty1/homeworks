export interface laPersona {
    nombre: string;
    withdrawalAmount: number;
    arrivalDate: Date;
}
export class Persona{
    private queue: laPersona[] = []

    enqueue(persona: laPersona){
        this.queue.push(persona)
    }

    dequeue(){
        return this.queue.length > 0 ? this.queue.shift(): null;
    }

    peek(){
        return this.queue.length > 0 ? this.queue[0]: null;
    }

    size(){
        return this.queue.length;
    }

    print(){
        this.queue.forEach(queue => {
            console.log(queue)
        });
    }

     getQueue(): laPersona[] {
        return [...this.queue];
    }
}
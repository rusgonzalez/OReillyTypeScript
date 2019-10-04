type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    //exercise 3.
    (destination: string): Reservation
}

let reserve: Reserve = (
    //from: Date,
    fromAndOrTo: Date, Date |
    toOrDestination?: Date | string,
    destination?: string
) => {/*
  if (toOrDestination instanceof Date && destination !== undefined) {
      // Book a round trip
  } else if (typeof toOrDestination === 'string') {
      // Book a one-way trip
  } 
*/}


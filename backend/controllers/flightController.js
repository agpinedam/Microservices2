let flights = [
    { id: 1, origin: 'Madrid', destination: 'Paris', seats: 3 },
    { id: 2, origin: 'Bogotá', destination: 'Miami', seats: 2 }
  ];
  
  const getFlights = (req, res) => {
    res.json(flights);
  };
  
  const createFlight = (req, res) => {
    const { origin, destination, seats } = req.body;
    const newFlight = {
      id: flights.length + 1,
      origin,
      destination,
      seats
    };
    flights.push(newFlight);
    res.status(201).json(newFlight);
  };
  
  const reserveSeat = (req, res) => {
    const { id } = req.params;
    const flight = flights.find(f => f.id === parseInt(id));
  
    if (!flight) {
      return res.status(404).json({ message: 'Vuelo no encontrado' });
    }
  
    if (flight.seats === 0) {
      return res.status(400).json({ message: 'No hay asientos disponibles' });
    }
  
    flight.seats -= 1;
    res.json({ message: 'Reserva realizada con éxito', flight });
  };
  
  module.exports = { getFlights, createFlight, reserveSeat };
  
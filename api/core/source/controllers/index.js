export const requestIp = ('/api', (request, response) => {
  const ip = request.ip;
  response.json({message: ip});
});

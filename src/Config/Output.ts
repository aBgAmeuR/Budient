export const logger = (data: String): void => {
  console.log(`\x1b[35m[Server] ${data} \x1b[0m`);
};

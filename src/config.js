app.use(
    cors({
      origin: 'http://localhost:3000',
      // Allow follow-up middleware to override this CORS for options
      preflightContinue: true,
    }),
  );
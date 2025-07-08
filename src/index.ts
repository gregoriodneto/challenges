import express from "express";
import routes from "./scheduling-validator/interface/controllers/routes/scheduler-express.route";

const app = express();
app.use(express.json());
app.use(routes);

export default app;

const PORT = 3000;
if (require.main === module)
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
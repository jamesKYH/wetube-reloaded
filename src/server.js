
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouters";
import videoRouter from "./routers/videoRouters";

const app = express();

const PORT = 4000; 

const logger = morgan("dev");

app.use(logger);
 




app.use("/", globalRouter);
app.use("/videos", videoRouter);
// /videos라고 시작하는 곳에 들어가면 videoRouter실행
app.use("/users", userRouter);





const handleListening = () => console.log(`sever listening on port ${PORT}`);

app.listen(4000, handleListening);

// app.listen(4000, () => console.log('sever listening on port 4000'));

import express from "express";
import { deleteVideo, edit,see, upload, } from "../controllers/videoControllers";

const videoRouter = express.Router();


videoRouter.get('/upload',upload);
videoRouter.get("/:id(\\d+)",see);
//비디오 라우터는 /watch로 연결하고 handlewatchvideo 실행
videoRouter.get('/:id(\\d+)/edit',edit);

videoRouter.get('/:id(\\d+)/delete', deleteVideo);




export default videoRouter;
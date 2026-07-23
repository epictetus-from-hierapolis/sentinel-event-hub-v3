import { EventType } from "./event-type.model";

export interface Event {
    id: string;
    cameraId: string;
    cameraName: string;
    type: EventType;
    thumbnailPath: string;
    videoPath: string;
    isRead: boolean;
    timestamp: Date;
}
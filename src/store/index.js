import { configureStore } from "@reduxjs/toolkit"
import trainer from "./states/trainer.silice"

export default configureStore ({
    reducer: {
        trainer
    }
})
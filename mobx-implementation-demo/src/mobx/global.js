let batchCount =  0

export const startBatch = () => batchCount++
export const endBatch = () => batchCount--
export const getBatchCount = () => batchCount


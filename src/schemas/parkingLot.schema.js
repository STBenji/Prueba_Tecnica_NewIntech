import z from 'zod'

export const createParkingSchema = z.object({
  type_vehicle: z.string().min(1).max(10),
  brand: z.string().min(1).max(10),
  model: z.string().min(1).max(20),
  color: z.string().min(1).max(20),
  plate: z.string().min(1).max(10),
  entry_date: z.string(),
})

export const parkingSchema = createParkingSchema.extend()

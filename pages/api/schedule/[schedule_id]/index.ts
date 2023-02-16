// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ScheduleRepository } from '../../../../server/repository/ScheduleRepository';
import { IGame, ISchedule, IScheduleViewModel } from '@/types/ISchedule';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  schedule: ISchedule
}

export default function APIScheduleGet(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const scheduleRepository = new ScheduleRepository();
  const schedule: ISchedule = scheduleRepository.getById('some-id');

  res.status(200).send({ schedule })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ScheduleRepository } from '../../../../server/repository/ScheduleRepository';
import { IGame, ISchedule, IScheduleViewModel } from '@/types/ISchedule';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ScheduleService } from '@/server/service/ScheduleService';

type Data = {
  schedule: IScheduleViewModel
}

export default function APIScheduleGet(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const scheduleRepository = new ScheduleRepository();
  const schedule: ISchedule = scheduleRepository.getById('some-id');
  schedule.games.map((game) => console.log(game.start))
  const viewModel: IScheduleViewModel = ScheduleService.getViewModel(schedule)
  

  res.status(200).send({ schedule: viewModel })
}

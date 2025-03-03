import { SelectQueryBuilder } from 'typeorm';

export const pagination = async (
  page: number,
  limit: number,
  queryBuidler: SelectQueryBuilder<unknown>,
) => {
  if (page && limit) {
    const offset = limit * page - limit;
    queryBuidler.offset(offset).limit(limit);
  }

  const [list, total] = await queryBuidler.getManyAndCount();

  return {
    page,
    totalPage: Math.ceil(total / limit),
    total: total,
    list,
  };
};

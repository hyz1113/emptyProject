import { Request } from '@/service/http';

// test 获取用户信息
export const getInfo = (data) => Request.post('/api/offline/v1/us', {...data});


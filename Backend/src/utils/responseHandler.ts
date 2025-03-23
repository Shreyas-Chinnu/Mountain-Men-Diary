export const responseHandler = (status: number, message: string, data: any = null) => {
    return {
      status,
      message,
      data,
    };
  };
  
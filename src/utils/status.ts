const status = {
    success: (data: any) => {
        return { status: 200, data }
    },
    false: (msg: string) => {
        return { code: 500, message: msg };
    },
}

export default status;
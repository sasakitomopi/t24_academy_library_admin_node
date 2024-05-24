interface AuthorizationType {
    id: number,
    name: string
}

const authorizationTypeList: AuthorizationType[] = [
    {
        id: 0,
        name: '一般'
    }, {
        id: 1,
        name: '管理者'
    }
]

export default authorizationTypeList;
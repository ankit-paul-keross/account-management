export type Account = {
    id: string
    name: string
    manager: string
    isChannelPartner: boolean
    channelPartner: string
    status: "Active" | "Pending" | "Inactive"
    createdOn: string
    updatedOn: string
}
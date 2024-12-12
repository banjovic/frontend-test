export interface User {
    id: string,
    email: string,
    active: boolean,
    is_verified: boolean,
    user_type: string,
    created_at: string,
    updated_at: string,
    organization_name: string
    phone_number: string,
    first_name: string
    last_name: string
    is_completed_kyc: boolean
    password?: string,
}
export type SignupPayloadType = {
    password: string,
    first_name: string
    last_name: string
    phone_number: string,
    email: string,
    organization_name: string
}

export type SignupResponseType = {
    success: boolean,
    message: string,
    data: User
}

export type LoginPayloadType = {
    email: string,
    password: string,
}

export type LoginResponseType = {
    success: boolean,
    message: string,
    token: string,
    data: User
}
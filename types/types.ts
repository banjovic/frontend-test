export type RegisterPayloadType = {
    password: string,
    confirmPassword: string,
    email: string,
    heardAboutUs: string
}

export type RegisterResponseType = {
    message: string,
}

export type LoginPayloadType = {
    email: string,
    password: string,
}

export type ResendPayloadType = {
    email: string,
}

export type ResendResponseType = {
    message: string,
    status: boolean,
}

export type OnboardingResponseType = {
    message: string,
    status: boolean,
    onboardingStage: number
}

export type ResetPasswordPayloadType = {
    newPassword: string,
    token: string | null,
    userId: string | null,
}

export interface ResponseWithUser {
    message: string,
    success: boolean,
    user: User
}

export interface User {
    _id: string,
    name: string,
    email: string,
    heardAboutUs: string,
    verified: boolean,
    avatar: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
    address: string,
    dateOfBirth: string,
    isOnboarded: boolean,
    role: string,
    onboardingStage: number,
    phoneNumber: number,
}

export type LoginResponseType = {
    message: string,
    token: string,
    user: User
}
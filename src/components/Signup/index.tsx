import SignupItem from "./SignupItem";

const SignupForm = () => {
    return(
        <>
            <div className="grid mx-auto mt-6 lg:mt-8 overflow-hidden text-gray-900 border border-b-1 border-gray-300 border-gray-200 rounded-md lg:grid-cols">
                <SignupItem/>
            </div>
        </>
    )
}

export default SignupForm;
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { API, MYAPI } from "../services/api";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/actions/clientActions";

function SignUpPage() {
    //const [roles, setRoles] = useState([]);
    const dispatch = useDispatch();
    const roles = useSelector((store) => store.client.roles);
    const { register, handleSubmit, watch, reset, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: "onChange",
        shouldUnregister: true,//Bir form alanı DOM'dan kaldırılırsa, o alanın form state'indeki değerini ve validation bilgisini de sil.
        defaultValues: {
            role_id: 3
        }
    });
    const selectedRoleId = watch("role_id");
    const selectedRole = roles.find((role) => role.id === Number(selectedRoleId));
    const isStore = selectedRole?.code === "store";

    useEffect(() => {
        dispatch(fetchRoles())
    }, []);

    const history = useHistory();

    const submitFn = async (data) => {
        const payload = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: Number(data.role_id),
        };
        if (isStore) {
            payload.store = {
                name: data.store.name,
                phone: data.store.phone,
                tax_no: data.store.tax_no,
                bank_account: data.store.bank_account,
            };
        }
        try {
            const response = await MYAPI.post(
                "/signup",
                payload
            );
            reset();
            toast.success("You need to click link in email to activate your account!");
            history.goBack();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "An error occurred. Please try again."
            );
        }
    };
    return (
        <section className="bg-[#FAFAFA]">
            <div className="flex px-9 md:max-w-5xl md:mx-auto lg:px-0 py-24">
                <div className="flex flex-col justify-center items-center w-full max-w-[450px] mx-auto gap-5 p-8 border bg-white shadow-sm rounded-lg border-[#ECECEC]">
                    <div className="flex flex-col w-full gap-2">
                        <h2 className="text-2xl text-center">Sign Up</h2>
                        <p className="text-base text-center text-[#737373] font-normal">Create a new account to join us</p>
                    </div>
                    <form
                        onSubmit={handleSubmit(submitFn)}
                        className="flex flex-col w-full items-start justify-center gap-5">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="name" className="text-base">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Must be at least 3 characters",
                                    },
                                })}
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />
                            {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Please enter a valid email address",
                                    },
                                })}
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />
                            {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Must be at least 8 characters",
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Must be min 8 character including numbers, lower case, upper case and special chars",
                                    },
                                })}
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm 
                             border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />
                            {errors.password && <span className="text-xs text-red-400">{errors.password.message}</span>}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                {...register("confirmPassword", {
                                    required: "Password confirmation is required",
                                    validate: (value) =>
                                        value === watch("password") || "Passwords do not match",
                                })}
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm 
                             border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />
                            {errors.confirmPassword && <span className="text-xs text-red-400">{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="role_id">Role</label>
                            <select
                                name="role_id"
                                id="role_id"
                                value={watch("role_id")}
                                {...register("role_id")}
                                className="font-normal px-4 py-3 rounded-sm  border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            >
                                {
                                    roles.map((role) => (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {isStore && (
                            <>
                                <hr className="w-full border-t border-[#ECECEC]" />
                                <h3 className="text-base font-bold text-[#23A6F0]">Store Details</h3>
                                <div className="flex flex-col w-full gap-2">
                                    <label htmlFor="storeName" className="text-sm font-semibold text-[#252B42]">Store Name</label>
                                    <input
                                        id="storeName"
                                        type="text"
                                        placeholder="Store Name"
                                        {...register("store.name", {
                                            required: "Store name is required",
                                            minLength: {
                                                value: 3,
                                                message: "Must be at least 3 characters",
                                            },
                                        })}
                                        className="text-[#737373] font-normal px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#23A6F0] transition-colors duration-200 w-full text-sm"
                                    />
                                    {errors.store?.name && <span className="text-xs text-red-400">{errors.store?.name.message}</span>}
                                </div>

                                <div className="flex flex-col w-full gap-2">
                                    <label htmlFor="storePhone" className="text-sm font-semibold text-[#252B42]">Store Phone</label>
                                    <input
                                        id="storePhone"
                                        type="tel"
                                        placeholder="+90 5XX XXX XX XX"
                                        {...register("store.phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^(\+90|0)?5\d{9}$/,
                                                message: "Please enter a valid Turkish phone number",
                                            },
                                        })}
                                        className="text-[#737373] font-normal px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#23A6F0] transition-colors duration-200 w-full text-sm"
                                    />
                                    {errors.store?.phone && <span className="text-xs text-red-400">{errors.store?.phone.message}</span>}
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <label htmlFor="storeTaxId" className="text-sm font-semibold text-[#252B42]">Store Tax ID</label>
                                    <input
                                        id="storeTaxId"
                                        type="text"
                                        placeholder="TXXXXVXXXXXX"
                                        {...register("store.tax_no", {
                                            required: "Tax ID is required",
                                            pattern: {
                                                value: /^T\d{4}V\d{6}$/,
                                                message: "Tax ID must be in TXXXXVXXXXXX format",
                                            },
                                            onChange: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            }
                                        })}
                                        className="text-[#737373] font-normal px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#23A6F0] transition-colors duration-200 w-full text-sm"
                                    />
                                    {errors.store?.tax_no && <span className="text-xs text-red-400">{errors.store?.tax_no.message}</span>}
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <label htmlFor="storeBankAccount" className="text-sm font-semibold text-[#252B42]">Store Bank Account (IBAN)</label>
                                    <input
                                        id="storeBankAccount"
                                        type="text"
                                        placeholder="TRXX XXXX XXXX XXXX XXXX XX"
                                        {...register("store.bank_account", {
                                            required: "IBAN is required",
                                            pattern: {
                                                value: /^TR\d{24}$/,
                                                message: "Please enter a valid TR IBAN (26 characters)",

                                            },
                                            onChange: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            }
                                        })}
                                        className="text-[#737373] font-normal px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#23A6F0] transition-colors duration-200 w-full text-sm"
                                    />
                                    {errors.store?.bank_account && <span className="text-xs text-red-400">{errors.store?.bank_account.message}</span>}
                                </div>
                            </>
                        )}
                        <button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer px-6 py-4 rounded-sm w-full disabled:bg-sky-300 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <div className="flex flex-row justify-center items-center">
                                    <Loader2 className="animate-spin h-5 w-5" />
                                </div>

                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </form>
                </div >
            </div>
        </section>
    )
}
export default SignUpPage;
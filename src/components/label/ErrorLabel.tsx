import { AnimatePresence, motion } from 'framer-motion'

type ErrorLabelProps = {
    touched?: boolean
    error?: string
}

const ErrorLabel = ({ touched, error }: ErrorLabelProps) => {
    return (
        <AnimatePresence>
            {touched && error && (
                <motion.div
                    layout
                    className="error-input-msg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    {error}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ErrorLabel
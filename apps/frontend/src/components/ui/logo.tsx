export default function Logo({ className }: { className?: string }) {
    return (
        <div className={`font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-400 ${className}`} >Promptverse </div>
    );
}
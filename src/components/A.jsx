export default function A({ href, children, newWindow=false }) {
    return (
        <a className="text-amber-400 hover:text-amber-300" target={newWindow ? "_blank" : "_self"} href={href}>{children}</a>
    )
}
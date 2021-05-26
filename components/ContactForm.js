export default function ContactForm() {
    return (
        <form name="contact" action="/thanks" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label htmlFor="yourname">Your Name:</label>
                <br />
                <input type="text" name="name" id="name" />
                <label htmlFor="youremail">Your Email:</label>
                <br />
                <input type="text" name="email" id="email" />
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}
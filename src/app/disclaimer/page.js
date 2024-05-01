import MainNavbar from "../components/shared/Nav/Navbar";

const Disclaimer = async () => {
  const brandData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  return (
    <>
      <MainNavbar brandData={brandData} />
      <div className="p-2 bg-white text-black">
        <h1>Disclaimer for AM Service Solution</h1>

        <p>
          If you require any more information or have any questions about our
          site&#39;s disclaimer, please feel free to contact us by email at
          <a href="mailto:customercareinchennai@gmail.com">
            customercareinchennai@gmail.com
          </a>
          .
        </p>
        <h2>Disclaimers for AM Service Solution</h2>

        <p>
          All the information on this website -{" "}
          <a href="https://www.customercareinchennai.com/">
            https://www.customercareinchennai.com/
          </a>{" "}
          - is published in good faith and for general information purpose only.
          AM Service Solution does not make any warranties about the
          completeness, reliability and accuracy of this information. Any action
          you take upon the information you find on this website (AM Service
          Solution), is strictly at your own risk. AM Service Solution will not
          be liable for any losses and/or damages in connection with the use of
          our website.
        </p>

        <p>
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone &#39;bad&#39;.
        </p>

        <p>
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their &#39;Terms of Service&#39; before engaging in any
          business or uploading any information.
        </p>

        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>

        <h2>Update</h2>

        <p>
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </p>
      </div>
    </>
  );
};

export default Disclaimer;

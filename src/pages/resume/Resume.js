import PageHeader from "../../components/PageHeader";
import AboutMe from "../../components/AboutMe";

const Resume = ({ brand }) => {
  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>
    </section>
  );
};

export default Resume;

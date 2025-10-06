import constitutionPdf from "../assets/ensub-constitution.pdf";
import Accordion from "../components/Accordion";

export default function Constitution() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-ensub-dark">ENSUB Constitution</h2>
      <p className="mt-2 text-gray-600">
        The official constitution of the Eastern Nagaland Students’ Union Bengaluru (ENSUB),
        first enacted in 2007 and amended to guide the Union’s purpose, structure, and values.
      </p>

      {/* Download Button */}
      <a
        href={constitutionPdf}
        download="ENSUB-Constitution.pdf"
        className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:bg-purple-600 transition"
      >
        Download Constitution PDF
      </a>

      {/* Full Constitution */}
      <div className="mt-10 space-y-4">
        <Accordion title="Preamble">
          <p>
            We, the students of Eastern Nagaland do hereby unite in a spirit of tolerance,
            open-mindedness and generosity and form ourselves into a Union for the betterment
            of the students, to provide for the meaningful address of student concerns and perspectives
            through the principles of democratic representation; to foster observance of shared goals
            and ideals of the community, to develop a sense of responsibility for our conduct and
            for our welfare. We shall represent the rights of the students without fear or favour
            and shall be respectful of the differing views within the membership, but accountable
            to those members for the exercise of our power, do enact, adopt and give ourselves this
            constitution in the year of the Lord 2007.
          </p>
        </Accordion>

        <Accordion title="Part 1 – The Union and Its Description">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Name:</strong> Eastern Nagaland Students’ Union Bengaluru (ENSUB)</li>
            <li><strong>Motto:</strong> “We Strive We Thrive”</li>
            <li><strong>Purpose, Aims and Objectives:</strong>
              <ul className="list-disc pl-6">
                <li>Encourage one another for academic excellence.</li>
                <li>Preserve custom, traditions, and cultural heritage of Eastern Nagaland.</li>
                <li>Enhance unity and good relationships with one another.</li>
                <li>Work for welfare and support in times of distress.</li>
                <li>Co-operate with other student unions.</li>
                <li>Live in harmony with all communities.</li>
              </ul>
            </li>
          </ul>
        </Accordion>

        <Accordion title="Part 2 – Registration and Membership">
          <p>
            Everyone from Eastern Nagaland residing in Bengaluru shall register in the Union
            by paying the prescribed registration fee. Associate members are also required to register.
            Membership is renewed annually by payment of the prescribed fee. Associate members (e.g.
            non-Eastern Nagas connected through marriage) have the same duties and responsibilities as
            regular members.
          </p>
        </Accordion>

        <Accordion title="Part 3 – General Body of the Union">
          <ul className="list-disc pl-6 space-y-2">
            <li>The General Body comprises all regular and associate members.</li>
            <li>It is the highest decision-making body of the Union.</li>
            <li>Meets once a year, during which elections are held.</li>
            <li>Decisions require a 2/3 majority.</li>
            <li>Meetings must have the requisite quorum.</li>
          </ul>
        </Accordion>

        <Accordion title="Part 4 – Office Bearers and Officials">
          <p>The Union shall consist of the following Office Bearers and Officials:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>President</li>
            <li>Vice President</li>
            <li>General Secretary</li>
            <li>Assistant General Secretary</li>
            <li>Finance Secretary</li>
            <li>Assistant Finance Secretary</li>
            <li>Cultural and Literary Secretary + Assistant</li>
            <li>Games and Sports Secretary + Assistant</li>
            <li>Treasurer</li>
          </ul>
          <p className="mt-2">
            Detailed powers and functions of each role include:  
            President (primary spokesperson, presides meetings, interprets Constitution),  
            Vice President (assists President),  
            General Secretary (records proceedings, manages correspondence),  
            Finance Secretary (handles budget, collections, accounts), etc.  
            Additionally, there shall be one Tribal Representative from each tribe.
          </p>
        </Accordion>

        <Accordion title="Part 5 – Committees">
          <p>
            Includes an Advisory Board (3–7 members) and an Executive Committee (5–9 members).
            The Executive Committee executes decisions, can impeach officials, appoint sessional leaders,
            and guide policy execution. Sub-committees may be formed as required.
          </p>
        </Accordion>

        <Accordion title="Part 6 – Mode of Occupying Office (Election)">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Criteria:</strong> Must be a bonafide member, with leadership qualities and clean public image.</li>
            <li><strong>Term:</strong> Office Bearers and Officials serve for 2 years. No re-election to the same post.
              Tenure may be extended by one year if required.</li>
            <li><strong>Election Rules:</strong> Made by Executive Committee and Advisory Board. Elections by secret ballot if contested.</li>
            <li><strong>Election Commission:</strong> 5–9 members. President serves as Returning Officer.</li>
          </ul>
        </Accordion>

        <Accordion title="Part 7 – Decorum of the House">
          <p>
            Quorum: 2/3 majority required for General Body meetings, simple majority for official meetings.  
            Members must adhere to the Constitution, avoid misconduct, respect others, and refrain from antisocial activities.
          </p>
        </Accordion>

        <Accordion title="Part 8 – Relationship and By-Laws">
          <p>
            ENSUB may organize outreach programs with other associations in Bengaluru.  
            By-laws include: registering within one month of arrival, disciplinary procedures for misconduct,
            and affirmation that ENSUB is the apex body of Eastern Nagaland in Bengaluru.  
            Confidentiality breaches may lead to permanent expulsion.
          </p>
        </Accordion>

        <Accordion title="Part 9 – Ratification and Amendments">
          <p>
            Amendments cannot be made within 5 years of the last amendment.  
            Proposed by written petition and require 2/3 majority approval.  
            A Constitution Amendment Committee shall be formed when amendments are endorsed,
            including at least three women and representatives from Office Bearers, Officials, Executive Committee,
            and Advisory Board.
          </p>
        </Accordion>

        <Accordion title="Part 10 – Office of the Union">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Oath of Allegiance:</strong> Administered by the Executive Committee Chairman and President to office holders.</li>
            <li><strong>Official Languages:</strong> Nagamese and English.</li>
            <li><strong>Disqualification & Impeachment:</strong> Convicted members are expelled. Officials may be impeached for violations or negligence.</li>
            <li><strong>Resignation:</strong> Must be submitted in writing. No verbal resignations are accepted. The President addresses resignation to the Executive Committee Chairman.</li>
          </ul>
        </Accordion>
      </div>
    </main>
  );
}

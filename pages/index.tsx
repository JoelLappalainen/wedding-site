import Head from "next/head";
import Img from "react-optimized-image";
import { styled } from "@styles/styled";
import { Text, Stack, Spacer, Link, Button, Ul, TextHighlight } from "@components/common";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import logo from "../images/logo.png";
import mapImg from "../images/map.png";
import branchImg from "../images/branch2.png";
import coverImg from "../images/jaakkoJaJanniCover.jpg";
import { PAGE_WIDTH } from "../constants";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Jannin ja Jaakon häät</title>
      </Head>

      <Content>
        <Header>
          <HeaderDecoration>
            <Img src={coverImg} />
            <Img src={logo} />
          </HeaderDecoration>

          <Stack
            align="center"
            spacing={{ initial: "xxlarge", md: "xlarge" }}
          >
            <Spacer size={{ initial: "xxlarge", md: "large" }} />
            <Navbar />
          </Stack>
        </Header>

        <Spacer size={{ initial: "xxlarge", md: "xxlarge" }} />

        <main>
          <Stack spacing="xxxlarge">
            <Section>
              <Stack spacing="medium" align="center">
                <Text variant="title2" id="tervetuloa">
                  Tervetuloa
                </Text>

                <LeafDecoration />
                <Text variant="body" align="justify">
                  Hei rakkaat ihmiset, tervetuloa juhlimaan ja todistamaan kanssamme avioliittomme ensiaskelia 27.8.2022. 
                  Toivottavasti näemme elokuussa, emme malttaisi odottaa!
                </Text>
                <Text variant="body" align="left" color="primary"> 
                  <Spacer size="normal" />
                  <strong>TL;DR</strong> 
                  <Spacer size="small" />
                  <TextHighlight>Mitä:</TextHighlight> Me mennään naimisiin, juhlat!
                  <Spacer size="xsmall" />
                  <TextHighlight>Missä:</TextHighlight> 
                  <Ul>
                    <li><strong>Vihkiminen:</strong> Kärkölän kirkko (
                      <Link
                        href="https://goo.gl/maps/wpUrU8hchGZ2wvn98"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kirkkotie 7, 16610 Kärkölä
                      </Link>)
                    </li>
                    <li><strong>Juhlapaikka:</strong> Etu-Koskelan tila (
                      <Link
                        href="https://goo.gl/maps/1RPEKDmGrna1n57B8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sulkavantie 395, 16670 Lappila
                      </Link>)
                    </li>
                  </Ul>
                  <Spacer size="small" />
                  <TextHighlight>Milloin:</TextHighlight> Lauantaina 27.8.2022. Vihkiminen klo 15.00, bileet heti perään siirtymisen jälkeen
                  <Spacer size="small" />
                  <TextHighlight>Kuka:</TextHighlight> Kutsussa nimetyt henkilöt
                  <Spacer size="small" />
                  <TextHighlight>Pukukoodi:</TextHighlight> Smart casual. Elokuun illat saattavat olla viileitä, muistathan ottaa mukaan myös lämmintä!
                  <Spacer size="small" />
                  <TextHighlight>Bonus</TextHighlight> Muistattehan <Link
                    href="https://forms.gle/q6CxYFJRqeRjcsY57"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ilmoittaa pääsettekö paikalle
                  </Link> 24.7.2022 mennessä.
                  <Spacer size="large" />
                </Text>
              

                <Text variant="title3" id="aikatauluJaSaapuminen">
                  Aikataulu ja saapuminen
                </Text>
                <Text variant="body" align="justify">
                  Vihkiminen tapahtuu <Link
                        href="https://goo.gl/maps/wpUrU8hchGZ2wvn98"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kärkölän kirkossa
                      </Link> klo 15.00. Saavuttehan ajoissa paikalle. 
                  Vihkimisen jälkeen siirrytään juhlapaikalle <Link
                        href="https://goo.gl/maps/1RPEKDmGrna1n57B8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Etu-Koskelan tilalle
                      </Link>. 
                  Luvassa on ruokaa ja musiikkia, ja halutessaan juhlia saa vaikka aamuun saakka. 
                  Halutessanne pitää puheen tai järjestää muun ohjelmanumeron, otattehan etukäteen yhteyttä Annika-kaasoon (yhteystiedot alla). Mikäli haluatte osallistua ainoastaan hääjuhlaan, voitte saapua myös suoraan juhlapaikalle. Ilmoitattehan myös tästä etukäteen. 
                  <Spacer size="normal" />
                  Juhlapaikalle ja sen läheisyyteen pääsee myös julkisilla kulkuneuvoilla (Lappilan juna-asema), mutta kehotamme tutkimaan myös mahdollisuutta esimerkiksi kimppakyytiin. Juhlapaikalla on runsaasti parkkitilaa. Juhlapaikan isäntä on lupautunut ajamaan tilataksia juhlapaikan ja Lahden välillä kiinteään hintaan, joten mikäli taksikyydille on tarvetta, laitattehan viestiä.
                  Mikäli tarvitsette apua kimppakyytien, kuljetusten tai majoitusvaihtoehtojen setvimisen kanssa, olkaa yhteydessä, niin järjestetään! 

                  <Spacer size="large" />
                </Text>
              
                <Text variant="title3" id="ilmoittautuminen">
                  Ilmoittautuminen
                </Text>
                <Text variant="body">
                  <strong>Ilmoitattehan 24.7.2022 mennessä pääsettekö osallistumaan juhlaan.</strong>
                  <Spacer size="medium" />

                  <Button onClick={() => window.open("https://forms.gle/q6CxYFJRqeRjcsY57", "_blank") }>Ilmoittaudu</Button>
                </Text>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="medium" align="center">
                <Text variant="title2" id="lisatietoja">
                  Lisätietoja
                </Text>

                <LeafDecoration />

                <Text variant="title3" id="majoittuminen">
                  Majoittuminen
                </Text>

                <Text variant="body" align="justify">
                  Mikäli olette extreme- tai eräihmisiä, hyviä uutisia, juhlapaikalle saa majoittua telttaillen! 
                  Mikäli kaipaatte retkipatjaa pehmeämpää petiä, valitettavasti juhlapaikan yhteydessä ei ole virallisempaa majoittautumismahdollisuutta. 
                  Lähimmät hotellit löytyvät Lahden puolelta. 
                </Text>
                  
                <Spacer size="xlarge" />

                <Text variant="title3" id="muistaminen">
                  Muistaminen
                </Text>

                <Text variant="body" align="justify">
                  Meitä useammin kuin muutaman kerran muutossa auttanut bestman Antti (kiitos Antti!) erään muuttorumbamme loppuvaiheessa kauniisti ilmaisi, että kannettavaa voisi olla vähemmänkin. 
                  Olemme yhteisten vuosiemme aikana onnistuneesti täyttäneet emme yhtä, vaan kaksi yhteistä kotia kaikella pastakoneesta Dapen säkkituoliin, ja valkokankaasta Airfryeriin. Erityisesti näiden haastavien vuosien jälkeen parasta on, jos vain pääsette kanssamme juhlimaan! 
                  Jos kuitenkin haluatte muistaa meitä läsnäolonne lisäksi, voitte halutessanne korottaa seikkailukassaamme tilille:
                </Text>

                <Text variant="body">
                  <strong>Janica Tuominen / FI04 1220 5000 3451 58</strong>
                </Text>

                <Spacer size="xlarge" />

                <Text variant="title3" id="yhteystiedot">
                  Yhteystiedot
                </Text>

                <Text variant="body">
                  Mikäli herää kysymyksiä, kommentteja tai muuta, olkaa toki yhteydessä!
                </Text>

                <Spacer size="xlarge" />

                <div>
                  <Stack axis={{ initial: "x", md: "y" }} spacing="xlarge">
                    <div>
                      <Stack spacing="small" align="center">
                        <Text variant="title3">Janni</Text>
                        <Link href="tel:+358400616837">0400 616 837</Link>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="small" align="center">
                        <Text variant="title3">Jaakko</Text>
                        <Link href="tel:+358453533999">045 353 3999</Link>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="small" align="center">
                        <Text variant="title3">Annika / kaaso</Text>
                        <Link href="tel:+358404122319">040 412 2319</Link>
                      </Stack>
                    </div>
                  </Stack>
                </div>

              </Stack>
            </Section>

            <Section lang="en">
              <Stack spacing="medium" align="center">
                <Text variant="title2" id="in-english">
                  In English
                </Text>

                <LeafDecoration />

                <Text variant="body" align="justify">
                  Hey B (and anyone else feeling international) this is for you! 
                  Dear peeps, we welcome you to join and celebrate the first steps of our marriage. 
                  We hope to see you in August, can't wait! 
                </Text>

                <Text variant="body" align="left" color="primary"> 
                  <Spacer size="small" />
                  <strong>TL;DR</strong>
                  <Spacer size="small" />
                  <TextHighlight>What:</TextHighlight> We're getting married, a party!
                  <Spacer size="small" />
                  <TextHighlight>Where:</TextHighlight>
                  <Ul>
                    <li><strong>Ceremony:</strong> Church of Kärkölä city (
                      <Link
                        href="https://goo.gl/maps/wpUrU8hchGZ2wvn98"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kirkkotie 7, 16610 Kärkölä
                      </Link>)
                    </li>
                    <li><strong>Wedding venue:</strong> Etu-Koskela ranch (
                      <Link
                        href="https://goo.gl/maps/1RPEKDmGrna1n57B8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sulkavantie 395, 16670 Lappila
                      </Link>)
                    </li>
                  </Ul>
                  <Spacer size="small" />
                  <TextHighlight>When:</TextHighlight> Ceremony 3:00 PM sharp, party right after at the venue as soon as we have relocated
                  <Spacer size="small" />
                  <TextHighlight>Who:</TextHighlight> People designated in the invitation
                  <Spacer size="small" />
                  <TextHighlight>Dress code:</TextHighlight> Smart casual. August nights can be chilly, so remember to pack something warm with you just in case!
                  <Spacer size="small" />
                  <TextHighlight>Bonus:</TextHighlight> Please remember to&nbsp;
                    <Link
                      href="https://forms.gle/q6CxYFJRqeRjcsY57"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RSVP
                    </Link> by 24th July 2022!
                  <Spacer size="large" />
                </Text>

                <Text variant="title3" id="scheduleAndArrival">
                  Schedule &amp; Arrival
                </Text>

                <Text variant="body" align="justify">
                  The wedding ceremony takes place at <Link
                    href="https://goo.gl/maps/wpUrU8hchGZ2wvn98"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    the church of Kärkölä city
                  </Link> starting at 3 PM sharp. Please be there in time. After the ceremony we shall relocate to our wedding venue at <Link
                    href="https://goo.gl/maps/1RPEKDmGrna1n57B8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Etu-Koskela ranch
                  </Link>. We'll be in for food and music and if you so wish the guests have the opportunity to party 'til the dawn. Should you wish to give a toast or organize another kind of a show during the party, please contact the Maid of Honor Annika (contacts below) prior to the event. If you wish to only participate to the wedding celebration after the ceremony you can arrive straight to the wedding venue. Please inform us beforehand if you wish to participate this way.
                  <Spacer size="normal" />
                  You can reach the church and the venue nearby also by public transportation (Lappila train station) but we encourage you to explore the possibilities for carpooling. The venue has plenty of parking space. The host of the venue has also promised to drive a bigger taxi between the venue and Lahti city for a fixed price, so if you need a taxi just let us know.
                  <Spacer size="normal" />
                  Should you need help with exploring carpooling, transfers or accomodation alternatives, just contact us and we'll help you!

                  <Spacer size="large" />
                </Text>

                <Text variant="title3" id="rsvp">
                  RSVP
                </Text>
                <Text variant="body">
                  <strong>RSVP by 24th July 2022. </strong>
                  <Spacer size="medium" />

                  <Button onClick={() => window.open("https://forms.gle/q6CxYFJRqeRjcsY57", "_blank") }>RSVP</Button>
                  <Spacer size="large" />
                </Text>

                <Text variant="title3" id="accommodation">
                  Accommodation
                </Text>

                <Text variant="body" align="justify">
                  If you are feeling a bit extreme or are wilderness lovers, good news, you can set up a tent next to the venue! If you are looking for a more comfortable way to accommodate, unfortunately there is no more official places of accommodation right next to the venue. The closest hotels near the venue are located in Lahti.
                  <Spacer size="large" />
                </Text>

                <Text variant="title3" id="gifts">
                  Gifts
                </Text>

                <Text variant="body" align="justify">
                  Jaakko's Bestman Antti who has helped us move more than a couple of times (thank you Antti!) once during our move kindly expressed that there could be a little less stuff to carry around. During our years together we have successfully filled not one but two homes with everything from pasta makers to Dape's bean bag, and from movie screens to Airfryers. Especially after these long years apart the best gift for us is to have you join our celebration. Should you still wish to gift us in addition to your presence, you can increase our adventure fund at:
                </Text>

                <Text variant="body">
                  <strong>Janica Tuominen / FI04 1220 5000 3451 58</strong>
                  <Spacer size="large" />
                </Text>

                <Text variant="title3" id="contact">
                  Contact
                </Text>

                <Text variant="body">
                  Should you have any questions, comments or other don't hesitate to reach out!
                  <Spacer size="large" />
                </Text>

                <Spacer size="xlarge" />

                <Section>
                  <div>
                    <Stack axis={{ initial: "x", md: "y" }} spacing="xlarge">
                      <div>
                        <Stack spacing="small" align="center">
                          <Text variant="title3">Janni</Text>
                          <Link href="tel:+358400616837">0400 616 837</Link>
                        </Stack>
                      </div>

                      <div>
                        <Stack spacing="small" align="center">
                          <Text variant="title3">Jaakko</Text>
                          <Link href="tel:+358453533999">045 353 3999</Link>
                        </Stack>
                      </div>

                      <div>
                        <Stack spacing="small" align="center">
                          <Text variant="title3">Annika / Maid of Honor</Text>
                          <Link href="tel:+358404122319">040 412 2319</Link>
                        </Stack>
                      </div>
                    </Stack>
                  </div>
                </Section>
              </Stack>
            </Section>
          </Stack>
        </main>

        <Spacer size="xxlarge" />

        <Footer />
      </Content>
    </Page>
  );
}

function LeafDecoration() {
  return (
    <Img
      src={branchImg}
      alt=""
      width={150}
      height={70}
      webp
      style={{ height: "auto" }}
    />
  );
}

const Page = styled("div", {
  width: "100%",
});

const Content = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: `${PAGE_WIDTH}px`,
  margingHorizontal: "auto",
  // paddingTop: "300px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 24px rgb(0, 0, 0, 0.05)",
  overflow: "hidden",
  // when: {
  //   md: {
  //     paddingTop: "200px",
  //   },
  //   sm: {
  //     paddingTop: "120px",
  //   },
  // },
});

const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  paddingHorizontal: "$normal",
});

const HeaderDecoration = styled("div", {
  position: "relative",
  top: "0px",
  left: "0px",
  right: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  "& > img:first-child": {
    width: "100%",
    objectFit: "contain",
  },
  "& > img:last-child": {
    width: "18%",
    position: "absolute",
    marginBottom: "25px"
  },
});

const MapImg = styled("div", {
  margingHorizontal: "calc(-1 * $normal) !important",

  "& > picture, img": {
    width: "100%",
    height: "auto",
  },
});

const ImageWrapper = styled("div", {
  position: "relative",
  top: "0px"
});

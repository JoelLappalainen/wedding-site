import Head from "next/head";
import Img from "react-optimized-image";
import { styled } from "@styles/styled";
import { Text, Stack, Spacer, Link, Button, Ul, TextHighlight } from "@components/common";
import SignupForm from "@components/SignupForm";
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
                <Text variant="body">
                  Hei rakkaat ihmiset, tervetuloa juhlimaan ja todistamaan kanssamme avioliittomme ensiaskelia. 
                  Toivottavasti näemme elokuussa, emme malttaisi odottaa!
                </Text>
                <Text variant="body" align="left" color="primary"> 
                  <Spacer size="normal" />
                  <strong>TL;DR</strong> 
                  <Spacer size="small" />
                  <TextHighlight>Mitä:</TextHighlight> Me mennään naimisiin, juhlat!
                  <Spacer size="xxsmall" />
                  <TextHighlight>Missä:</TextHighlight> Vihkiminen: Kärkölän kirkko (<Link
                    href="https://goo.gl/maps/wpUrU8hchGZ2wvn98"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kirkkotie 7, 16610 Kärkölä
                  </Link>)
                  <Spacer size="xxsmall" />
                  <TextHighlight>Juhlapaikka:</TextHighlight> Etu-Koskelan tila (<Link
                    href="https://goo.gl/maps/1RPEKDmGrna1n57B8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sulkavantie 395, 16670 Lappila
                  </Link>)
                  <Spacer size="xxsmall" />
                  <TextHighlight>Milloin:</TextHighlight> Vihkiminen klo 15.00, bileet heti perään siirtymisen jälkeen
                  <Spacer size="xxsmall" />
                  <TextHighlight>Kuka:</TextHighlight> Kutsussa nimetyt henkilöt
                  <Spacer size="xxsmall" />
                  <TextHighlight>Pukukoodi:</TextHighlight> Smart casual. Elokuun illat saattavat olla viileitä, muistathan ottaa mukaan myös lämmintä!
                  <Spacer size="xxsmall" />
                  <TextHighlight>Bonus</TextHighlight> Muistattehan <Link
                    href="https://TODO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ilmoittautua
                  </Link> 24.7.2022 mennessä.
                  <Spacer size="large" />
                </Text>
              

                <Text variant="title3" id="aikatauluJaSaapuminen">
                  Aikataulu ja saapuminen
                </Text>
                <Text variant="body">
                  Vihkiminen tapahtuu Kärkölän kirkossa klo 15.00. Saavuttehan ajoissa paikalle. 
                  Vihkimisen jälkeen siirrytään juhlapaikalle Etu-Koskelan tilalle. Luvassa on ruokaa ja musiikkia, ja halutessaan juhlia saa vaikka aamuun saakka. Halutessanne pitää puheen tai järjestää muun ohjelmanumeron, otattehan etukäteen yhteyttä Annika-kaasoon (yhteystiedot alla). Mikäli haluatte osallistua ainoastaan hääjuhlaan, voitte saapua myös suoraan juhlapaikalle. Ilmoitattehan myös tästä etukäteen. Juhlapaikalle ja sen läheisyyteen pääsee myös julkisilla kulkuneuvoilla (Lappilan juna-asema), mutta kehotamme tutkimaan myös mahdollisuutta esimerkiksi kimppakyytiin. Juhlapaikalla on runsaasti parkkitilaa. Juhlapaikan isäntä on lupautunut ajamaan tilataksia juhlapaikan ja Lahden välillä kiinteään hintaan, joten mikäli taksikyydille on tarvetta, laitattehan viestiä.
                  Mikäli tarvitsette apua kimppakyytien, kuljetusten tai majoitusvaihtoehtojen setvimisen kanssa, olkaa yhteydessä, niin järjestetään! 

                  <Spacer size="large" />
                </Text>
              
                <Text variant="title3" id="ilmoittautuminen">
                  Ilmoittautuminen
                </Text>
                <Text variant="body">
                  <strong>Ilmoittautuminen 24.7.2022 mennessä. </strong>
                  <Spacer size="medium" />

                  <Button onClick={() => window.open("https://TODO", "_blank") }>Ilmoittaudu</Button>
                </Text>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="reittiohjeet">
                  Reittiohjeet
                </Text>

                <LeafDecoration />

                <MapImg>
                  <Img
                    src={mapImg}
                    alt="TBA"
                    width={PAGE_WIDTH}
                    height={0.33333 * PAGE_WIDTH}
                    webp
                  />
                </MapImg>

                <Text variant="title3">TBA</Text>

                <Spacer size="normal" />

                <Text variant="body">TBA TBA TBA</Text>

                <Link
                  href="https://goo.gl/maps/VwkK4n98yJjskrtR6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TBA 56, 04680 TBA
                </Link>

                <Text variant="body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris id leo eleifend iaculis. Etiam congue quis elit consectetur dignissim. Ut id convallis ipsum. Aenean vitae erat varius, dignissim lorem nec, tempus libero. Donec magna nunc, sollicitudin ut elementum in, tincidunt scelerisque eros. Aenean sit amet nulla in sem malesuada imperdiet vitae a enim. Maecenas eu dolor vitae erat tempus accumsan elementum at lectus. Integer porttitor, mauris eu volutpat aliquet, justo turpis suscipit ex, eu eleifend massa ante sed libero. Nunc feugiat sapien ex, ut elementum velit rhoncus in. Nullam mollis semper convallis. In vel velit dictum, placerat purus maximus, suscipit mauris. Nunc at sem hendrerit, sagittis ex vel, tincidunt neque.
                </Text>

                <Link
                  href="https://fi.wikipedia.org/wiki/Venetsia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Menomestan verkkosivut
                </Link>
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

                <Text variant="body">
                  Mikäli olette extreme- tai eräihmisiä, hyviä uutisia, juhlapaikalle saa majoittua telttaillen! 
                  Mikäli kaipaatte retkipatjaa pehmeämpää petiä, valitettavasti juhlapaikan yhteydessä ei ole virallisempaa majoittautumismahdollisuutta. 
                  Lähimmät hotellit löytyvät Lahden puolelta. 
                </Text>
                  
                <Spacer size="xlarge" />

                <Text variant="title3" id="muistaminen">
                  Muistaminen
                </Text>

                <Text variant="body">
                  Meitä useammin kuin muutaman kerran muutossa auttanut bestman Antti (kiitos Antti!) erään muuttorumbamme loppuvaiheessa kauniisti ilmaisi, että kannettavaa voisi olla vähemmänkin. 
                  Olemme yhteisten vuosiemme aikana onnistuneesti täyttäneet emme yhtä, vaan kaksi yhteistä kotia kaikella pastakoneesta Dapen säkkituoliin, ja valkokankaasta Airfryeriin. Erityisesti näiden haastavien vuosien jälkeen parasta on, jos vain pääsette kanssamme juhlimaan! 
                  Jos kuitenkin haluatte muistaa meitä läsnäolonne lisäksi, voitte halutessanne korottaa seikkailukassaamme tilille:
                  <Spacer size="medium" />
                  <strong>Janica Tuominen / FI04 1220 5000 3451 58</strong>
                </Text>

              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="yhteystiedot">
                  Yhteystiedot
                </Text>

                <LeafDecoration />

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
                        <Text variant="title3">Annika (kaaso)</Text>
                        <Link href="tel:+358404122319">040 412 2319</Link>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </Section>

            <Section lang="en">
              <Stack spacing="large" align="center">
                <Text variant="title2" id="in-english">
                  In English
                </Text>

                <LeafDecoration />

                <Text variant="body">
                  Hey B (and anyone else feeling international) this is for you! 
                  Dear peeps, we welcome you to join and celebrate the first steps of our marriage. 
                  We hope to see you in August, can't wait! 
                </Text>

                <Text variant="body" align="left"> 
                  <Spacer size="small" />
                  <Text variant="body" color="primary"><strong>TL;DR</strong></Text>
                  <Spacer size="small" />
                  <Text variant="body" color="primary"><TextHighlight>What:</TextHighlight> We're getting married, a party!</Text>
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
                  <Text variant="body" color="primary"><TextHighlight>When:</TextHighlight> Ceremony 3:00 PM sharp, party right after at the venue as soon as we have relocated</Text>
                  <Spacer size="small" />
                  <Text variant="body" color="primary"><TextHighlight>Who:</TextHighlight> People designated in the invitation</Text>
                  <Spacer size="small" />
                  <Text variant="body" color="primary"><TextHighlight>Dress code:</TextHighlight> Smart casual. August nights can be chilly, so remember to pack something warm with you just in case!</Text>
                  <Spacer size="small" />
                  <Text variant="body" color="primary"><TextHighlight>Bonus:</TextHighlight> Please remember to&nbsp;
                    <Link
                      href="https://TODO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RSVP
                    </Link> by 24th July 2022!
                  </Text>
                  <Spacer size="large" />
                </Text>

                <Text variant="title3" id="scheduleAndArrival">
                  Schedule & Arrival
                </Text>

                <Text variant="body" color="text">
                  The wedding ceremony takes place at the church of Kärkölä city starting at 3 PM sharp. Please be there in time. After the ceremony we shall relocate to our wedding venue at Etu-Koskela ranch. We'll be in for food and music and if you so wish the guests have the opportunity to party 'til the dawn. Should you wish to give a toast or organize another kind of a show during the party, please contact the Maid of Honor Annika (contacts below) prior to the event. If you wish to only participate to the wedding celebration after the ceremony you can arrive straight to the wedding venue. Please inform us beforehand if you wish to participate this way.
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

                  <Button onClick={() => window.open("https://TODO", "_blank") }>RSVP</Button>
                  <Spacer size="large" />
                </Text>

                <Text variant="title3" id="accommodation">
                  Accommodation
                </Text>

                <Text variant="body">
                  If you are feeling a bit extreme or are wilderness lovers, good news, you can set up a tent next to the venue! If you are looking for a more comfortable way to accommodate, unfortunately there is no more official places of accommodation right next to the venue. The closest hotels near the venue are located in Lahti.
                  <Spacer size="large" />
                </Text>

                <Text variant="title3" id="gifts">
                  Gifts
                </Text>

                <Text variant="body">
                  Jaakko's Bestman Antti who has helped us move more than a couple of times (thank you Antti!) once during our move kindly expressed that there could be a little less stuff to carry around. During our years together we have successfully filled not one but two homes with everything from pasta makers to Dape's bean bag, and from movie screens to Airfryers. Especially after these long years apart the best gift for us is to have you join our celebration. Should you still wish to gift us in addition to your presence, you can increase our adventure fund at:
                  <Spacer size="medium" />
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
                        <Text variant="title3">Annika (kaaso)</Text>
                        <Link href="tel:+358404122319">040 412 2319</Link>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </Section>
          </Stack>
        </main>

        <Spacer size="xxxlarge" />

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

const SignupFormWrapper = styled("div", {
  margingHorizontal: "calc(-1 * $normal) !important",
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

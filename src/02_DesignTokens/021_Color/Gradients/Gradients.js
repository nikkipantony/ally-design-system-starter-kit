import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Gradients = () => {
    const data = useStaticQuery(graphql`
        query GradientsQuery {
            designTokensJson(name: { eq: "$gradients" }) {
                name
                mapValue {
                    name
                    compiledValue
                }
            }
        }
    `)

    const Name = data.designTokensJson.name
    const TokenName = Name.substring(1)
    const Title = {
        textTransform: "capitalize",
        marginTop: "80px",
        lineHeight: "1",
    }

    return (
        <section>
            <h3 style={Title}>{TokenName}</h3>
            <p>Description.</p>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    marginBottom: "-40px",
                    width: "100%",
                }}
            >
                {data.designTokensJson.mapValue.map(node => (
                    <figure
                        className="colors__figure"
                        style={{
                            marginBottom: "10px",
                            width: "280px",
                        }}
                    >
                        <div
                            style={{
                                height: "120px",
                                width: "100%",
                                background: `${node.compiledValue}`,
                                borderRadius: "4px",
                                border: "2px solid #000013",
                                boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 6px 0",
                            }}
                        ></div>
                        <figcaption
                            style={{
                                color: "#000013",
                                fontSize: "1.125rem",
                                fontWeight: "700",
                                textAlign: "left",
                                padding: "1rem 0 2.5rem",
                            }}
                        >
                            gradient({node.name})
                        </figcaption>
                    </figure>
                ))}
            </div>

            <table
                className="docblock-argstable css-6hhrgj"
                style={{ textAlign: "left" }}
            >
                <thead className="docblock-argstable-head">
                    <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Default</th>
                        <th style={{ width: "50% !important" }}>Use</th>
                    </tr>
                </thead>
                <tbody className="docblock-argstable-body">
                    {data.designTokensJson.mapValue.map(node => (
                        <tr>
                            <td className="css-4lbn0a">
                                <span className="css-in3yi3">
                                    gradient({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    <span>{node.compiledValue}</span>
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        background: gradient(
                                        {node.name});
                                    </code>
                                </pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Gradients
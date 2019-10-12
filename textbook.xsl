<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>My Textbooks</h2>
  <table border="1">
    <tr bgcolor="blue">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Edition</th>
      <th style="text-align:left">CoverType</th>
      <th style="text-align:left">AuthorName</th>
      <th style="text-align:left">AuthorLastName</th>
      <th style="text-align:left">Publisher</th>
      <th style="text-align:left">Website</th>
      <th style="text-align:left">Date of Posting</th>
      <th style="text-align:left">ISBN</th>
    </tr>
    <xsl:for-each select="TextBooks/book">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="edition"/></td>
      <td><xsl:value-of select="covertype"/></td>
      <td><xsl:value-of select="authorN"/></td>
      <td><xsl:value-of select="authorLN"/></td>
      <td><xsl:value-of select="publisher"/></td>
      <td><xsl:value-of select="publisher_url"/></td>
      <td><xsl:value-of select="year"/></td>
<td><xsl:value-of select="ISBN"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

